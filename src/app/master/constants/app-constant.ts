export const noActionsNoCheckBoxList = ['Invoice'];


export const hiddenColumns = [
  'Id',
  'id',
  'ID',
  'CompanyCurrencyId',
  'CompanyId',
  'BusinessUnit',
  'SkillsetId',
  'BuId',
  'SpocName',
  'HotName',
  'DepartmentId',
  'CompanyID',
  'DepartmentId',
  'SpocName',
  'PlantCurrency',
  'ClusterId',
  'ClassificationId',
  'Status',
  'ClassificationID',
  'BusinessSupportID',
  'VendorTypeID',
  'VendorCurrencyId',
  'LocationId',
  'CurrencyId',
  'IsActive',
  'VendorId',
  'SkillsetId',
  'Version',
  'IsDeleted',
  'ParentVendorId',
  'StatusID',
  'VendorId',
  'WBSId',
  'PlantId',
  'FundCenterId',
  'CostCenterId',

  'IsActive',
 //  'GlobalId',
  'Id',
  'SectionId',
  'DepartmentId',
  'BUId',
  'CostCenterId',
  'GroupId',
  'ApprovalName',
  'ApprovalNtid',
'ApprovedBy',
'ApprovedDate',
'ApprovalEno',
'ApproveStatus',
// 'Ntid',
// 'VendorSAPID'
];


export const dateFields = [
  'ModifiedOn',
  'CreatedOn',
  'ValidFrom',
  'ValidTo',
  'ValidityStart',
  'ValidityEnd',
  'DocumentData',
  'PeriodStart',
  'PeriodEnd',
  'CFCyclePlanningStartDate',
  'CFCyclePlanningEndate',
  'ValidityStart',
  'ValidityEnd',
  'DocumentDate',
  'DeliveryDate',
  'VendorInvoiceDate',
  'PostingDate',
  'StartDate',
  'DateOfJoining',
  'DateofLeaving',
  'validityStart',
  'validityEnd',
  'documentDate',
  'ContEnd',
  'ApprovedDate',
  'TechnicallyCompleted',
  'SAPCreatedOn','ChangedOn','EnteredOn',
 'ActionedOn',
 'HolidayDate'
];


export const menuId: { [key: string]: number } = {
  ['CF Cycle Master']: 16,
  ['Company Master']: 2,
  ['Cost Center Master']: 22,
  ['Department SPOC Master']: 18,
  ['Organization Structure']: 31,
  ['Plant Master']: 3,
  ['PMO Conversion Master']: 20,
  ['Skillset Master']: 1,
  ['Standard Cost Master']: 21,
  ['Vendor Master']: 4,
  ['Vendor Contact Details']: 32,
  ['Funds Center Master']: 23,
  ['WBS Master']: 26,
  ['Purchase Header Master']: 30,
  ['Vendor Rate Card Master']: 7,
  ['Employee Master']: 29,
  ['Purchase Line Item']: 39,
  ['Bosch Rate Card Master']: 8,
  ['BU SPOC Master']: 37,
  ['BU HOT Master']: 38,
  ['Section SPOC Master']: 36,
  ['Bosch OH Master']: 33,
  ['Target Savings Master']: 34,
  ['GB Business Area Master']: 40,
  ['Billing Period Master']: 35,
  ['Invoice']: 42,
  ['Holiday Calendar Master']: 53,
  ['ODC Master']: 54,
  ['Onboarding SPOC Master']: 55,
  ['Asset SPOC Master']: 56,
  ['Access Card SPOC Master']: 57,
  ['Complete ECL SPOC Master']: 58,
  ['NT ID SPOC Master']: 59,
  ['Vendor Skillset Master']: 60,
  ['Check In SPOC Master']: 69,

  ['GCN SPOC Master']: 70,
  ['SAP IDM SPOC Master']: 71,
  ['Transport SPOC Master']: 72,
  ['Deboarding SPOC Master']: 73,
  ['Accessories SPOC Master']: 74,


};

export const ApprovalList = [
  'Vendor Rate Card Master',
  'Bosch Rate Card Master',
  'Bosch OH Master',
  'Target Savings Master',
  'Billing Period Master',
  'Section SPOC Master',
  'BU SPOC Master',
  'BU HOT Master',
  'GB Business Area Master',
  'Vendor Skillset Master'
];

export const masterNamesMapping: any = {
  'Skillset Master': 'Skillset Master',
  'Company Master': 'Company Master',
  'Billing Period Master': 'Billing Period Master',
  'BU HOT Master': 'BU HOT Master',
  'Bosch OH Master': 'Bosch OH Master',
  'Bosch Rate Card Master': 'Bosch Rate Card Master',
  'BU SPOC Master': 'BU SPOC Master',
  'CF Cycle Master': 'CF Cycle Master',
  'Department SPOC Master': 'Department SPOC Master',
  'Employee Master': 'Employee Master',
  'Funds Center Master': 'Funds Center Master',
  'GB Business Area Master': 'GB Business Area Master',
  'Invoice': 'Invoice',
  'Organization Structure': 'Organization Structure',
  'Plant Master': 'Plant Master',
  'PMO Conversion Master': 'PMO Conversion Master',
  'Purchase Header Master': 'Purchase Header Master',
  'Purchase Line Item': 'Purchase Line Item',
  'Section SPOC Master': 'Section SPOC Master',
  'Standard Cost Master': 'Standard Cost Master',
  'Target Savings Master': 'Target Savings Master',
  'Vendor Master': 'Vendor Master',
  'Vendor Rate Card Master': 'Vendor Rate Card Master',
  'WBS Master': 'WBS Master',
  'FCM Security Master':'FCM Security Master'
};

export const masterDataList = [
  { title: 'Billing Period Master', route: '' },
  { title: 'BU HOT Master', route: 'createBuHOTMaster' },
  { title: 'Bosch OH Master', route: 'createBoschOHMaster' },
  { title: 'Bosch Rate Card Master', route: 'createBoschRateCardMaster' },
  { title: 'BU SPOC Master', route: 'createBuSPOCMaster' },
  { title: 'CF Cycle Master', route: 'createCFCycleMaster' },
  { title: 'Company Master', route: 'createCompanyMaster' },
  { title: 'Cost Center Master', route: 'createCostCenterMaster' },
  { title: 'Department SPOC Master', route: 'createDepartmentSPOCMaster' },
  { title: 'Employee Master', route: 'createEmployeeMaster' },
  { title: 'Funds Center Master', route: 'createFundCenterMaster' },
  { title: 'GB Business Area Master', route: 'createGBBusinessAreaMaster' },
  { title: 'Invoice', route: '' },
  { title: 'Organization Structure', route: 'createOrganizationStructure' },
  { title: 'Plant Master', route: 'createPlantMaster' },
  { title: 'PMO Conversion Master', route: 'createPMOConversionMaster' },
  { title: 'Purchase Header Master', route: 'createPurchaseHeaderMaster' },
  { title: 'Purchase Line Item', route: 'CreatePurchaseLineItemMaster' },
  { title: 'Section SPOC Master', route: 'createSectionSPOCMaster' },
  { title: 'Skillset Master', route: 'createSkillsetMaster' },
  { title: 'Standard Cost Master', route: 'createStandardCostMaster' },
  { title: 'Target Savings Master', route: 'createTargetSavingsMaster' },
  { title: 'Vendor Master', route: 'createVendorMaster' },
  { title: 'Vendor Rate Card Master', route: 'createVendorRateCardMaster' },
  { title: 'WBS Master', route: 'createWbsMaster' },
  { title:'FCM Security Master',route:'createWbsMasterFCMSecurity'}
];

export const vendorContactUiJson = [
  {
    label: 'Id',
    name: 'Id',
    value: '',
    validationType: 'alphanumericWithSpecialChar',
    dropdownList: null,
    isVisible: false,
    readOnly: false,
  },
  {
    label: 'Contact Type',
    name: 'ContactTypeId',
    value: '',
    validationType: 'dropdown',
    dropdownList: [
      {
        id: '2',
        name: 'contact ',
      },
      {
        id: '1',
        name: 'escalation',
      },
    ],
    isVisible: true,
    readOnly: true,
    isRequired: true,
  },
  {
    label: 'Contact Name',
    name: 'ContactName',
    value: '',
    validationType: 'alphanumericWithSpecialChar',
    dropdownList: null,
    isVisible: true,
    readOnly: false,
  },
  {
    label: 'Email',
    name: 'Email',
    value: '',
    validationType: 'email',
    dropdownList: null,
    isVisible: true,
    readOnly: false,
  },
  {
    label: 'Country Code',
    name: 'CountryCode',
    value: '',
    validationType: 'alphanumericWithSpecialChar',
    dropdownList: null,
    isVisible: true,
    readOnly: false,
  },
  {
    label: 'Mobile',
    name: 'Mobile',
    value: '',
    validationType: 'number',
    dropdownList: null,
    isVisible: true,
    readOnly: false,
  },
  {
    label: 'Designation',
    name: 'Designation',
    value: '',
    validationType: 'alphanumericWithSpecialChar',
    dropdownList: null,
    isVisible: true,
    readOnly: false,
  },
  {
    label: 'Domain Responsibility',
    name: 'DomainResponsibility',
    value: '',
    validationType: 'alphanumericWithSpecialChar',
    dropdownList: null,
    isVisible: true,
    readOnly: false,
  },
  {
    label: 'Primary Contact',
    name: 'PrimaryContact',
    value: '',
    validationType: 'radioButton',
    radioOptions: [
      { id: true, name: 'Yes' },
      { id: false, name: 'No' },
    ],
    dropdownList: null,
    isVisible: true,
    readOnly: false,
  },
  {
    label: 'Status',
    name: 'Status',
    value: '',
    validationType: 'radioButton',
    radioOptions: [
      { id: true, name: 'Active' },
      { id: false, name: 'Inactive' },
    ],
    dropdownList: null,
    isVisible: true,
    readOnly: false,
  },
  {
    label: 'Note',
    name: 'Note',
    value: '',
    validationType: 'alphanumericWithSpecialChar',
    dropdownList: null,
    isVisible: true,
    readOnly: false,
  },
  {
    label: 'Escalate Level',
    name: 'EscalateLevel',
    value: '',
    validationType: 'dropdown',
    dropdownList: [
      {
        id: '770f3da2-4aa9-409b-b0c9-44b8ab2e99eb',
        name: 'Level 1',
      },
      {
        id: '481d98b8-f59b-4aad-bbab-dc19a47a4a7c',
        name: 'Level 2',
      },
      {
        id: 'deade643-00da-4c85-87ed-63c7ae002c7d',
        name: 'Level 3',
      },
    ],
    isVisible: true,
    readOnly: false,
  },
];
export const ODCUiJson = [
  {
    label: 'ODC Cost/Head Count',
    name: 'odcCostPerHeadCount',
    value: '',
    validationType: 'decimal',
    dropdownList: null,
    isVisible: true,
    readOnly: false,
  },
  {
    dropdownList: null,
    isRequired: true,
    isVisible: true,
    label: "Validity Start",
    name: "validityStart",
    readOnly: false,
    validationType: "date"
  },
  {
    dropdownList: null,
    isRequired: true,
    isVisible: true,
    label: "Validity End",
    name: "validityEnd",
    readOnly: false,
    validationType: "date"
  },
];

export const style: any = {
  width: '100%',
  height: '100%',
  flex: '1 1 auto',
  'margin-top': '5px',
};
export const dropdownParsingList: string[] = [
  'SectionId',
  'BUId',
  'BuId',
  'GroupId',
  'DepartmentId',
  'CfCycleYear',
  'CFCyclePeriodOwner',
];

export const uiJsonForCheckBox: any = [
  {
    label: 'Plant Id',
    name: 'Id',
    value: '',
    validationType: 'alphanumericWithSpecialChar',
    dropdownList: null,
    isVisible: false,
    readOnly: true,
    isRequired: true,
  },
  {
    label: 'Plant Code',
    name: 'PlantCode',
    value: '',
    validationType: 'alphanumericWithSpecialChar',
    dropdownList: null,
    isVisible: true,
    readOnly: true,
    isRequired: true,
  },
  {
    label: 'Name',
    name: 'Name',
    value: '',
    validationType: 'alphanumericWithSpecialChar',
    dropdownList: null,
    isVisible: true,
    readOnly: true,
    isRequired: true,
  },
  {
    label: 'Company Code',
    name: 'CompanyId',
    value: '',
    validationType: 'dropdown',
    dropdownList: [
      {
        id: '8d20e3e4-d336-4c27-b04c-0cf494ab7535',
        name: '38F0 (BGSV)',
      },
      {
        id: '7d20e3e4-d336-4c27-b04c-0cf494ab7535',
        name: '6520 (BGSW)',
      },
    ],
    isVisible: true,
    readOnly: true,
    isRequired: true,
  },
  {
    label: 'Address Street',
    name: 'AddressStreet',
    value: '',
    validationType: 'alphanumericWithSpecialChar',
    dropdownList: null,
    isVisible: true,
    readOnly: true,
    isRequired: true,
  },
  {
    label: 'City',
    name: 'City',
    value: '',
    validationType: 'alphanumericWithSpecialChar',
    dropdownList: null,
    isVisible: true,
    readOnly: true,
    isRequired: true,
  },
  {
    label: 'State',
    name: 'State',
    value: '',
    validationType: 'alphanumeric',
    dropdownList: null,
    isVisible: true,
    readOnly: true,
    isRequired: true,
  },
  {
    label: 'Country',
    name: 'Country',
    value: '',
    validationType: 'alphanumeric',
    dropdownList: null,
    isVisible: true,
    readOnly: true,
    isRequired: true,
  },
  {
    label: 'Postal Code',
    name: 'PostalCode',
    value: '',
    validationType: 'number',
    dropdownList: null,
    isVisible: true,
    readOnly: true,
    isRequired: true,
  },
  {
    label: 'Currency',
    name: 'PlantCurrency',
    value: '',
    validationType: 'dropdown',
    dropdownList: [
      {
        id: 'e6098534-5159-4f38-8de4-713ad598939a',
        name: 'JPY',
      },
      {
        id: 'ee31bd48-4364-4dc4-bfbc-72efb9127c0e',
        name: 'INR',
      },
      {
        id: '48daec99-2f6f-44dd-a21a-ecbc9c2f1fbb',
        name: 'VND',
      },
    ],
    isVisible: true,
    readOnly: true,
    isRequired: true,
  },
  {
    label: 'Business Area',
    name: 'BusinessAreaId',
    value: '',
    validationType: 'dropdownWithSearch',
    dropdownList: [],
    isVisible: true,
    readOnly: false,
    isRequired: false,
  },
  {
    label: 'Is Business Area',
    name: 'IsBusinessArea',
    value: '',
    validationType: 'checkbox',
    dropdownList: [],
    isVisible: true,
    readOnly: false,
    isRequired: false,
  },
  {
    label: 'Status',
    name: 'ActiveStatus',
    value: '',
    validationType: 'dropdown',
    dropdownList: [
      {
        id: 'Inactive',
        name: 'Inactive',
      },
      {
        id: 'Active',
        name: 'Active',
      },
    ],
    isVisible: true,
    readOnly: false,
    isRequired: true,
  },
];

// for vendor master form
export const  keyList: string[] = [
  "ContactType",
  "ContactName",
  "Designation",
  "CountryCode",
  "Mobile",
  "Note",
  "PrimaryContact",
  "Email",
  "DomainResponsibility",
  // "createdBy",
  // "createdOn",
  // "Designation",
  // "Email",
  // "escalate",
  'EscalateLevel',
  // "id",
  // "isDeleted",
  // "Message",
  // "mobile",
  // "modifiedBy",
  // "modifiedOn",
  // "Notes",
  // "primaryContact",
  // "srNo",
   "Status",
  // "type",
  // "vendorId",
  // "vendorSAPID",
  // ... Add all other keys here
];
export const  ODCChildList: string[] = [
  "odcCostPerHeadCount",
  "validityStart",
  "validityEnd",
];

export const EscaltionIds: { [key: string]: string } = {
  '770f3da2-4aa9-409b-b0c9-44b8ab2e99eb': 'Level 1',
  '481d98b8-f59b-4aad-bbab-dc19a47a4a7c': 'Level 2',
  'deade643-00da-4c85-87ed-63c7ae002c7d': 'Level 3',
};

export const  dateFieldsForImports = [
  'cfCyclePlanningStartDate',
  'cfCyclePlanningEndate',

  // extra fields
  'ModifiedOn',
  'CreatedOn',
  'ValidFrom',
  'ValidTo',
  'ValidityStart',
  'ValidityEnd',
  'DocumentData',
  'PeriodStart',
  'PeriodEnd',
  'CfCyclePlanningStartDate',
  'CfCyclePlanningEndate',
  'ValidityStart',
  'ValidityEnd',
  'VendorInvoiceDate',
  'PostingDate',
];
