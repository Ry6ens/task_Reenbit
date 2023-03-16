import MyInputSearch from '@/components/UI/MyInputSearch/MyInputSearch';
import MySelect from '@/components/UI/MySelect/MySelect';

import { options } from './options';

import { Section } from './PostFilter.styled';

export default function PostFilter({ filter, setFilter }) {
  return (
    <Section>
      <MyInputSearch
        type="text"
        placeholder="Filter by name..."
        autoFocus
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        options={options}
        defaultValue={'Sort by:'}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
      />
    </Section>
  );
}
