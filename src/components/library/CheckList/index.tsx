import CheckItem from './CheckItem';
import SC from './style';

const CheckList: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <SC.Container>
      {items.map((item: string, idx: number) => (
        <CheckItem key={`${idx}-${item}`}>{item}</CheckItem>
      ))}
    </SC.Container>
  );
};

export default CheckList;
