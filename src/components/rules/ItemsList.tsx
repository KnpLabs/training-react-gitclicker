import { RootState } from '@/store'
import numberFormat from '@/tests/numberFormat'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Fab } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export function ItemsList() {
  const items = useSelector((state: RootState) => state.rules.items)
  const navigate = useNavigate()

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
            {items.map(item => (
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
                    color="error"
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
      <Fab
        onClick={() => navigate('/rules/add')}
        color="primary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
      >
        <AddIcon />
      </Fab>
    </>
  )
}
