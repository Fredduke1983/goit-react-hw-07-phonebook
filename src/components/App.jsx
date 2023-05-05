import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { PhoneBookStyle } from './app.styled';
import { Oval } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from 'redux/selectors/selectors';

export function App() {
  const isLoading = useSelector(isLoadingSelector);

  return (
    <PhoneBookStyle>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
        }}
      >
        <h1 style={{ marginRight: '20px' }}>Phonebook</h1>
        <Oval
          height={20}
          width={20}
          color="#2a2a2a"
          wrapperStyle={{}}
          wrapperClass=""
          visible={isLoading}
          ariaLabel="oval-loading"
          secondaryColor="#b4a7d6"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>

      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
    </PhoneBookStyle>
  );
}