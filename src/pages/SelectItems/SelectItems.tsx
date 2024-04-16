import { ChangeEvent, forwardRef, ForwardRefExoticComponent, useMemo, useState } from "react";
import { useElementsData } from "../../hooks/useElementsData";
import { Item } from "../../components/Item/Item";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./SelectItems.css";

interface Props {
  initSelection: number[];
  maxItems?: number;
  toggleDialog: () => void;
  saveSelection: (items: number[]) => void;
}

export const SelectItems: ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLDialogElement>
> = forwardRef<HTMLDialogElement, Props>(
  ({ initSelection, maxItems = 3, toggleDialog, saveSelection }, ref) => {
    const { elements, filterItems } = useElementsData();

    const [selectedIDs, setSelectedIDs] = useState<number[]>(initSelection);

    const [search, setSearch] = useState<string | undefined>(undefined);
    const [filter, setFilter] = useState<number | undefined>(undefined);

    const handleSelect = (id: number) => {
      if (selectedIDs.includes(id)) {
        setSelectedIDs(selectedIDs.filter((i) => i !== id));
      } else {
        if (selectedIDs.length < maxItems) {
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
        <div className="select-modal-content">
          <Header filterItems={filterItems} onSearch={handleSearch} onFilter={handleChangeFilter} />
          <ul className="list">
            {listItems.map((e) => (
              <Item
                key={e.id}
                disabled={selectedIDs?.length === maxItems}
                isSelected={selectedIDs.includes(e.id)}
                item={e}
                onClick={() => handleSelect(e.id)}
              />
            ))}
          </ul>
          <Footer {...footerProps} />
        </div>
      </dialog>
    );
  }
);
