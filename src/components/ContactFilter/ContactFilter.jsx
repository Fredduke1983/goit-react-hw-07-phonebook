import { deleteContactsThunk } from 'redux/contacts/reducerContacts';
import { FilterDelBtn, FilterListItem } from './contactFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { delContact, filterContacts } from 'store/store';

export function ContactFilter() {
  const dispatch = useDispatch();
  const contacts = useSelector(({ contacts }) => contacts);
  const valueFilter = useSelector(({ valueFilter }) => valueFilter);

  // const onChangeFilter = e => {
  //   dispatch(filterContacts(e.target.value));
  // };

  const onDeleteContact = e => {
    dispatch(deleteContactsThunk(e.target.id));
  };

  function onFilterContacts(filterContact) {
    return filterContact.map(contact => {
      return (
        <FilterListItem id={contact.id} key={contact.id}>
          {contact.name}: {contact.number}
          <FilterDelBtn id={contact.id} onClick={onDeleteContact}>
            delete
          </FilterDelBtn>
        </FilterListItem>
      );
    });
  }

  return (
    <>
      <input
        placeholder="search"
        // onChange={onChangeFilter}
        // value={valueFilter}
        name="filter"
      ></input>
      <ul>
        {onFilterContacts(
          [...contacts].filter(contact => {
            return contact.name.toLowerCase().includes(valueFilter);
          })
        )}
      </ul>
    </>
  );
}
