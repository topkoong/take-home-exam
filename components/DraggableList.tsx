import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from 'react-beautiful-dnd'
import React, { memo } from 'react'

import { GridColumns } from '@mui/x-data-grid-pro'
import dynamic from 'next/dynamic'

const DraggableListItem = dynamic(() => import('./DraggableListItem'), {
  ssr: false,
})

export type DraggableListProps = {
  items: GridColumns
  onDragEnd: OnDragEndResponder
}

const DraggableList = memo(({ items, onDragEnd }: DraggableListProps) => {
  console.log('items: ', items)
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable-list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items.map(
              (item, index) =>
                item.field !== 'action' && (
                  <DraggableListItem
                    item={item}
                    index={index}
                    key={item.field}
                  />
                ),
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
})

export default DraggableList
