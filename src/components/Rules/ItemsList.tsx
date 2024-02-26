import { useSelector } from 'react-redux'
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
import AddIcon from '@material-ui/icons/Add'
import numberFormat from '../../utils/numberFormat'
import { RootState, useAppDispatch } from '../../store'
import { useNavigate } from 'react-router-dom'
import { Fab, makeStyles } from '@material-ui/core'
import { deleteItem } from '../../modules/rules'
import { Item, RequestStatus } from '../../type'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))


export const ItemsList = () => {
  const items = useSelector((state: RootState) => state.rules.items)
  const requestStatus = useSelector((state: RootState) => state.rules.deleteItemRequestStatus)
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleDelete = (item: Item) => {
    dispatch(deleteItem(item.id))
  }

  return (
    <>
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
                <TableCell align="right">{numberFormat(item.linesPerMillisecond * 10)}</TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => navigate(`/rules/edit/${item.id}`)}
                    aria-label="edit"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    aria-label="delete"
                    disabled={requestStatus === RequestStatus.Loading}
                    onClick={() => handleDelete(item)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab
        onClick={() => navigate('/rules/add')}
        className={classes.fab}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </>
  )
}
