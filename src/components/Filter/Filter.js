import { FilterInput, Filters } from './Filter.styled';

export const Filter = ({ search, filter }) => {
  return (
    <>
      <Filters>
        Find contacts by name
        <FilterInput
          value={filter}
          onChange={search}
          type="text"
          name="{card.name}"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></FilterInput>
      </Filters>
    </>
  );
};
