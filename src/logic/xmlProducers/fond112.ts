import {ParagraphXmlProducerType} from "../exportXmlUtility";

export const producer: ParagraphXmlProducerType = (row, period) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
<RequestCompanyRegistration xmlns="http://rep.oio.dk/toldskat.dk/xml/schemas/virkreg/2004/06/01/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://rep.oio.dk/toldskat.dk/xml/schemas/virkreg/2004/06/01/
H:\\SKAT - CSC fællesserver\\Projekter\\Erhvervsprojektet\\Forvaltning\\Produkter\\Igangvaerende\\Release_15\\Edb-spec_Webservices\\Webservice grænseflade\\XML\\Udviklet af ES\\Service til ES\\ErhvervsSystemet\\create\\TOLDSKAT_RequestCompanyRegistration.xsd">
\t<HeaderDetails>
\t\t<RequestID>${row.req_id}</RequestID>
\t\t<AccessCode>jpj</AccessCode>
\t</HeaderDetails>
\t<FileStatementCreate>
\t\t<CompanyCode>1</CompanyCode>
\t\t<CVRNumber>${row.cvr}</CVRNumber>
\t\t<DocReceptionDate>${period.start?.format('YYYY-MM-DD')}</DocReceptionDate>
\t</FileStatementCreate>
\t<CompanyCreate>
\t\t<DataSupplier>1</DataSupplier>
\t\t<CompanyStartDate>${period.start?.format('YYYY-MM-DD')}</CompanyStartDate>
\t\t<OperationModeCreate>
\t\t\t<OperationModeCode>029</OperationModeCode>
\t\t</OperationModeCreate>
\t\t<CompanyName>
\t\t\t<CompanyNameShort>Dias-fbl 1.1.2-${row.cvr}</CompanyNameShort>
\t\t\t<CompanyName1>Dias-fbl 1.1.2-${row.cvr}</CompanyName1>
\t\t</CompanyName>
\t\t<RegistrationStatusCreate>
\t\t\t<RegistrationStatusCode>01</RegistrationStatusCode>
\t\t</RegistrationStatusCreate>
\t\t<AccountingPeriod>
\t\t\t<AccountingPeriodStartDate>${period.start?.format('YYYY-MM-DD')}</AccountingPeriodStartDate>
\t\t\t<AccountingPeriodEndDate>${period.end?.format('YYYY-MM-DD')}</AccountingPeriodEndDate>
\t\t</AccountingPeriod>
\t\t<ActivityCreate>
\t\t\t<ActivityCode>1</ActivityCode>
\t\t\t<ActivityNumber>479900</ActivityNumber>
\t\t</ActivityCreate>
\t\t<CompanyAddressCreate>
\t\t\t<CompanyAddressCode>01</CompanyAddressCode>
\t\t\t<AddressTypeCode>001</AddressTypeCode>
\t\t\t<StreetCode>5814</StreetCode>
\t\t\t<HouseNumberFrom>145</HouseNumberFrom>
\t\t\t<MunicipalityCode>0461</MunicipalityCode>
\t\t</CompanyAddressCreate>
\t\t<CompanyAdditionalAddressCreate>
\t\t\t<CompanyAddressCode>03</CompanyAddressCode>
\t\t\t<AddressTypeCode>001</AddressTypeCode>
\t\t\t<StreetCode>5814</StreetCode>
\t\t\t<HouseNumberFrom>145</HouseNumberFrom>
\t\t\t<MunicipalityCode>0461</MunicipalityCode>
\t\t</CompanyAdditionalAddressCreate>
\t\t<RegistrationArrangementsCreate>\t\t\t\t\t
\t\t\t<TaxArrangementsCreate>
\t\t\t\t<ObligationCode>023</ObligationCode>
\t\t\t\t<ObligationTypeCode>3</ObligationTypeCode>
\t\t\t\t<RegArrangementsStartDate>${period.start?.format('YYYY-MM-DD')}</RegArrangementsStartDate>
\t\t\t\t<TaxationRuleCode>12</TaxationRuleCode>
\t\t\t\t<RegistrationSpecFrequencyCode>10</RegistrationSpecFrequencyCode>
\t\t\t\t<RegistrationSpecMediaCode>2</RegistrationSpecMediaCode>
\t\t\t</TaxArrangementsCreate>
\t\t</RegistrationArrangementsCreate>
\t</CompanyCreate>
</RequestCompanyRegistration>`;
}