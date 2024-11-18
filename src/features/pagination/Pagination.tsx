import {ReactElement} from 'react';

import {Button} from '../../common/components/Button.tsx';
import {ControlClasses, ControlProps} from '../../models';

import './Pagination.css';

export type PaginationProps = (
    ControlProps<number>
    & {currentOption: number}
    & {currentPagesCount: number}
    & {setPaginationState: (pageNumber: number) => void}
);

function getClasses(index: number, currentOption: number | null): string {
  const classesMap: ControlClasses = {
    active: 'bg-indigo-300 hover:bg-indigo-200',
    inactive: 'hover:bg-indigo-300'
  };

  return index === currentOption ? classesMap.active : classesMap.inactive;
}

export function Pagination({currentOption, currentPagesCount, setPaginationState}: PaginationProps): ReactElement {
  function onPaginationClick(pageNumber: number) {
    if (pageNumber !== currentOption) {
      setPaginationState(pageNumber);
    }
  }

  return (
    <div className="pagination flex justify-center flex-wrap gap-2">
      {
        Array.from(
          {length: currentPagesCount},
          (_, index) => (
            <Button key={index}
                    className={getClasses(index, currentOption)}
                    onClick={() => onPaginationClick(index)}>
              {index + 1}
            </Button>
          )
        )
      }
    </div>
  );
}
