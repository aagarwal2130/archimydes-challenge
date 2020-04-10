export const AUTHENTICATION_API = {
  url: "http://localhost:3000/api/v1/signin",
  queryParams: {},
};

export const STORIES_API = {
  url: "http://localhost:3000/api/v1/stories",
  queryParams: {},
};

export const TABLE_HEADINGS = [
  {
    name: "ID",
    value: "id",
    sortable: true,
  },
  {
    name: "Summary",
    value: "summary",
    sortable: false,
  },
  {
    name: "Description",
    value: "description",
    sortable: false,
  },

  {
    name: "Type",
    value: "type",
    sortable: false,
  },
  {
    name: "Complexity",
    value: "complexity",
    sortable: true,
  },
  {
    name: "Estimated time for completion",
    value: "estimatedHrs",
    sortable: false,
  },
  {
    name: "Cost",
    value: "cost",
    sortable: false,
  },
];
