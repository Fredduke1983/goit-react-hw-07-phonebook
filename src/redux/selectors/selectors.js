const contactsSelector = ({ contacts }) => contacts;
const filterSelector = ({ valueFilter }) => valueFilter;
const isLoadingSelector = ({ isLoading }) => isLoading;
const error = ({ error }) => error;

export { contactsSelector, filterSelector, isLoadingSelector, error };
