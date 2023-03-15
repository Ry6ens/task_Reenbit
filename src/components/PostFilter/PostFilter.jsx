import MyInput from '@/components/UI/MyInput/MyInput';
import MySelect from '@/components/UI/MySelect/MySelect';

import { options } from './options';

import { Section } from './PostFilter.styled';

export default function Cards({ filter, setFilter }) {
  return (
    <Section>
      <MyInput
        type="text"
        placeholder="Filter by name..."
        autoFocus
        value={filter.query}
        // value={filter}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        // onChange={e => setFilter(e.target.value)}
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
