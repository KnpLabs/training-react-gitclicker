import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { deleteItem } from 'modules/rules'
import numberFormat from 'utils/numberFormat'

export const ItemsList = () => {
  const items = useSelector(state => state.rules.items)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleDelete = item => {
    dispatch(deleteItem(item))
  }

   return (
     <TableContainer component={Paper}>
       <Table aria-label="simple table">
         <TableHead>
           <TableRow>
             <TableCell>Name</TableCell>
             <TableCell align="right">Price</TableCell>
             <TableCell align="right">Lines per seconds</TableCell>
             <TableCell align="right">Action</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {items.map((item) => (
             <TableRow key={item.id}>
               <TableCell component="th" scope="row">{item.name}</TableCell>
               <TableCell align="right">{numberFormat(item.price)}</TableCell>
               <TableCell align="right">{numberFormat(item.multiplier * 10)}</TableCell>
               <TableCell align="right">
                 <IconButton
                   onClick={() => history.push(`/rules/edit/${item.id}`)}
                   aria-label="edit"
                 >
                   <EditIcon />
                 </IconButton>
                 <IconButton
                   onClick={() => handleDelete(item)}
                   color="secondary"
                   aria-label="delete"
                 >
                   <DeleteIcon />
                 </IconButton>
               </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
   )
}
