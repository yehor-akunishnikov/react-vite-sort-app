import {ReactElement, useContext} from 'react';

import {StoreContext, StoreDispatchContext} from '../../store/store.ts';
import {Button} from '../../common/components/Button.tsx';
import {ControlClasses} from '../../models';

import './Pagination.css';

function getClasses(index: number, currentOption: number | null): string {
  const classesMap: ControlClasses = {
    active: 'bg-indigo-300 hover:bg-indigo-200',
    inactive: 'hover:bg-indigo-300'
  };

  return index === currentOption ? classesMap.active : classesMap.inactive;
}

export function Pagination(): ReactElement {
  const dispatch = useContext(StoreDispatchContext);
  const state = useContext(StoreContext);

  function onChange(pageIndex: number): void {
    dispatch({
      type: 'SetCurrentPage',
      payload: {
        currentPage: pageIndex
      }
    });
  }

  return (
    <div className="pagination flex justify-center flex-wrap gap-2">
      {
        Array.from(
          {length: state.processing.pagesTotal},
          (_, index) => (
            <Button
              key={index}
              className={getClasses(index, state.processing.currentPage)}
              onClick={() => onChange(index)}
            >
              {index + 1}
            </Button>
          )
        )
      }
    </div>
  );
}
