import * as React from 'react'

import ClearIcon from '@mui/icons-material/Clear'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { Draggable } from 'react-beautiful-dnd'
import { GridEnrichedColDef } from '@mui/x-data-grid-pro'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useSharedContext } from '../context/SharedContext'

export type DraggableListItemProps = {
  item: GridEnrichedColDef
  index: number
}

function getStyle(style: any, snapshot: any) {
  if (!snapshot.isDropAnimating) {
    return style
  }
  const { moveTo } = snapshot.dropAnimation
  // move to the right spot
  const translate = `translate(${moveTo.x}px, ${moveTo.y}px)`
  // add a bit of turn for fun
  // const rotate = 'rotate(0.5turn)';

  // patching the existing style
  return {
    ...style,
    transform: `${translate}`,
    // slowing down the drop because we can
    // transition: `all ${curve} ${duration + 1}s`,
    margin: '24px',
    background: snapshot.isDragging ? 'rgb(235,235,235)' : '',
  }
}

const DraggableListItem = ({ item, index }: DraggableListItemProps) => {
  const { removeTableColumn } = useSharedContext()
  return (
    <Draggable draggableId={item.field} index={index} key={item.field}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getStyle(provided.draggableProps.style, snapshot)}>
          <ListItemButton
            sx={{
              border: 1,
              borderRadius: 1,
              margin: '8px 0',
              borderColor: '#E6E8F0',
            }}>
            <ListItemIcon>
              <DragIndicatorIcon />
            </ListItemIcon>
            <ListItemText primary={item.headerName} />
            <ListItemIcon onClick={() => removeTableColumn(item.field)}>
              <ClearIcon />
            </ListItemIcon>
          </ListItemButton>
        </div>
      )}
    </Draggable>
  )
}

export default DraggableListItem
