import { TableContainer, Table, TableRow, TableCell, Paper, TableHead, TableBody } from '@mui/material'
import React from 'react'
import dateUtils from '../../utils/DateUtils'

const Leave = ({ userDetails }) => {
  return (
    <TableContainer component={Paper} >
      <Table
        sx={{ minWidth: 650 }}
        size="small"
        aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">No.</TableCell>
            <TableCell align="left">Created on</TableCell>
            <TableCell align="right">Leave Type</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right"># of Days</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userDetails?.leaveApplicationDtos.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ 'width': '2rem' }}>{index + 1}</TableCell>
              <TableCell align="left" style={{ 'width': '4rem' }}>{row.created}</TableCell>
              <TableCell align="right" style={{ 'width': '2rem' }}>{row.leaveType}</TableCell>
              <TableCell align="right" style={{ 'width': '8rem' }}>{row.fromDate} - {row.toDate}</TableCell>
              <TableCell align="right" style={{ 'width': '2rem' }}>{dateUtils.getDifference(row.fromDate, row.toDate)}</TableCell>
              <TableCell align="right" style={{ 'width': '2rem' }}>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  )
}

export default Leave