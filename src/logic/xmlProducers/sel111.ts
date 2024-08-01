import {ParagraphXmlProducerType} from "../exportXmlUtility";

export const producer: ParagraphXmlProducerType = (row, period) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
<RequestCompanyRegistration
\txmlns="http://rep.oio.dk/toldskat.dk/xml/schemas/virkreg/2004/06/01/"
\txmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
\txsi:schemaLocation="http://rep.oio.dk/toldskat.dk/xml/schemas/virkreg/2004/06/01/
H:\\SKAT - CSC fællesserver\\Projekter\\Erhvervsprojektet\\Forvaltning\\Produkter\\Igangvaerende\\Release_15\\Edb-spec_Webservices\\Webservice grænseflade\\XML\\Udviklet af ES\\Service til ES\\ErhvervsSystemet\\create\\TOLDSKAT_RequestCompanyRegistration.xsd">
\t<HeaderDetails>
\t\t<RequestID>${row.req_id}</RequestID>
\t\t<AccessCode>jpj</AccessCode>
\t</HeaderDetails>
\t<FileStatementCreate>
\t\t<CompanyCode>1</CompanyCode>
\t\t<CVRNumber>${row.cvr}</CVRNumber>
\t\t<DocReceptionDate>${period.start?.format('yyyy-mm-dd')}</DocReceptionDate>
\t</FileStatementCreate>
\t<CompanyCreate>
\t\t<DataSupplier>2</DataSupplier>
\t\t<CompanyStartDate>${period.start?.format('yyyy-mm-dd')}</CompanyStartDate>
\t\t<OperationModeCreate>
\t\t\t<OperationModeCode>009</OperationModeCode>
\t\t</OperationModeCreate>
\t\t<CompanyName>
\t\t\t<CompanyNameShort>DIAS-AS-${row.cvr}</CompanyNameShort>
\t\t\t<CompanyName1>DIAS-AS-${row.cvr}</CompanyName1>
\t\t</CompanyName>
\t\t<RegistrationStatusCreate>
\t\t\t<RegistrationStatusCode>01</RegistrationStatusCode>
\t\t</RegistrationStatusCreate>
\t\t<AccountingPeriod>
\t\t\t<AccountingPeriodStartDate>${period.start?.format('yyyy-mm-dd')}</AccountingPeriodStartDate>
\t\t\t<AccountingPeriodEndDate>${period.end?.format('yyyy-mm-dd')}</AccountingPeriodEndDate>
\t\t</AccountingPeriod>
\t\t<ActivityCreate>
\t\t\t<ActivityCode>1</ActivityCode>
\t\t\t<ActivityNumber>642020</ActivityNumber>
\t\t</ActivityCreate>
\t\t<CompanyAddressCreate>
\t\t\t<CompanyAddressCode>03</CompanyAddressCode>
\t\t\t<AddressTypeCode>001</AddressTypeCode>
\t\t\t<StreetCode>5814</StreetCode>
\t\t\t<HouseNumberFrom>145</HouseNumberFrom>
\t\t\t<MunicipalityCode>0461</MunicipalityCode>
\t\t</CompanyAddressCreate>
\t\t<ShareCapitalsCreate>
\t\t\t<ShareClassCode>005</ShareClassCode>
\t\t\t<ShareCapitalAmount>5000000</ShareCapitalAmount>
\t\t</ShareCapitalsCreate>
\t\t<RegistrationArrangementsCreate>
\t\t\t<TaxArrangementsCreate>
\t\t\t\t<ObligationCode>067</ObligationCode>
\t\t\t\t<ObligationTypeCode>3</ObligationTypeCode>
\t\t\t\t<RegArrangementsStartDate>${period.start?.format('yyyy-mm-dd')}</RegArrangementsStartDate>
\t\t\t\t<!-- SEL 1.1.1 -->
\t\t\t\t<TaxationRuleCode>01</TaxationRuleCode>
\t\t\t\t
\t\t\t\t <!-- SEL 3a
\t\t\t\t<TaxationRuleCode>33</TaxationRuleCode>
\t\t\t\t-->
\t\t\t\t<RegistrationSpecFrequencyCode>10</RegistrationSpecFrequencyCode>
\t\t\t\t<RegistrationSpecMediaCode>2</RegistrationSpecMediaCode>
\t\t\t</TaxArrangementsCreate>
\t\t</RegistrationArrangementsCreate>
\t\t<!-- MOMS PLIGT
\t\t<RegistrationArrangementsCreate>
\t\t\t<DutyArrangementsCreate>
\t\t\t\t<ObligationCode>063</ObligationCode>
\t\t\t\t<ObligationTypeCode>2</ObligationTypeCode>
\t\t\t\t<RegArrangementsStartDate>%RegArrangementsStartDate%</RegArrangementsStartDate>
\t\t\t\t<BusinessAreaCode>178</BusinessAreaCode>
\t\t\t\t<RegistrationSpecFrequencyCode>09</RegistrationSpecFrequencyCode>
\t\t\t\t<RegistrationSpecMediaCode>8</RegistrationSpecMediaCode>
\t\t\t</DutyArrangementsCreate>
\t\t</RegistrationArrangementsCreate>
\t\t -->
\t</CompanyCreate>
</RequestCompanyRegistration>`;
}