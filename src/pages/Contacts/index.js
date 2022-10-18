import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <>
       <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      <ContactList />
    </>
  );
}
