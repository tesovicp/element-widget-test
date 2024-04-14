import { ChangeEvent, forwardRef, ForwardRefExoticComponent, useMemo, useState } from "react";
import { useElementsData } from "../../hooks/useElementsData";
import { Item } from "../../components/Item/Item";
import { SelectItemsHeader } from "./SelectItemsHeader";
import { SelectedItemsFooter } from "./SelectedItemsFooter";
import "./SelectItems.css";

interface Props {
  initSelection: number[];
  toggleDialog: () => void;
  saveSelection: (items: number[]) => void;
}

export const SelectItems: ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLDialogElement>
> = forwardRef<HTMLDialogElement, Props>(({ initSelection, toggleDialog, saveSelection }, ref) => {
  const { elements, filterItems } = useElementsData();

  const [selectedIDs, setSelectedIDs] = useState<number[]>(initSelection);

  const [search, setSearch] = useState<string | undefined>(undefined);
  const [filter, setFilter] = useState<number | undefined>(undefined);

  const handleSelect = (id: number) => {
    if (selectedIDs.includes(id)) {
      setSelectedIDs(selectedIDs.filter((i) => i !== id));
    } else {
      if (selectedIDs.length < 3) {
        setSelectedIDs([...(selectedIDs || []), id]);
      }
    }
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  const handleChangeFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(parseInt(event.target.value));
  };

  const listItems = useMemo(() => {
    if (!search && !filter) {
      return elements;
    }
    const filtered = filter ? elements.filter((e) => e.id > filter) : elements;
    const filteredAndSearched = search
      ? filtered.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
      : filtered;
    return filteredAndSearched;
  }, [elements, search, filter]);

  const footerProps = {
    elements,
    selectedIDs,
    handleSelect,
    toggleDialog,
    saveSelection,
  };

  return (
    <dialog ref={ref} className="dialog">
      <div id="select-modal-content">
        <SelectItemsHeader
          filterItems={filterItems}
          onSearch={handleSearch}
          onFilter={handleChangeFilter}
        />
        <ul className="list">
          {listItems.map((e) => (
            <Item
              key={e.id}
              disabled={selectedIDs?.length === 3}
              isSelected={selectedIDs.includes(e.id)}
              item={e}
              onClick={() => handleSelect(e.id)}
            />
          ))}
        </ul>
        <SelectedItemsFooter {...footerProps} />
      </div>
    </dialog>
  );
});
