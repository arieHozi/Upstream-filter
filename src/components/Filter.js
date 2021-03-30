import React, { useState, useEffect } from 'react'
import { Data } from '../Data'

function Filter({ setFilterdA }) {

  const [customerName, setCustomerName] = useState('')
  const [address, setAddress] = useState('')
  const [order, setOrder] = useState('')
  const [tax, setTax] = useState({
    operation: '',
    value: 0
  })
  const [total, setTotal] = useState({
    operation: '',
    value: 0
  })

  useEffect(() => {
    setFilterdA(Data)
  }, []);




  const onSelectFilterHandler = (e) => {
    e.preventDefault()
    const newDataArray = []
    Data.map((row) => {
      let isName = ''
      if (customerName) {
        isName = row.customer.toLowerCase().includes(customerName.toLowerCase())
      }
      let isAddress = ''
      if (address) {
        isAddress = row.address.toLowerCase().includes(address.toLowerCase())
      }
      let isOrder = ''
      if (order) {
        isOrder = row.order.toLowerCase().includes(order.toLowerCase())
      }
      let taxCompareRes = ''
      if (tax.value !== "") {
        switch (tax.operation) {
          case "greater":
            taxCompareRes = row.tax > tax.value
            break;
          case "less":
            taxCompareRes = row.tax < tax.value
            break;
          case "greater-equal":
            taxCompareRes = row.tax >= tax.value
            break;
          case "less-equal":
            taxCompareRes = row.tax <= tax.value
            break;
          default:
            break;
        }
      }
      let totalCompareRes = ''
      if (total.value !== "") {

        switch (total.operation) {
          case "greater":
            totalCompareRes = row.total > total.value
            break;
          case "less":
            totalCompareRes = row.total < total.value
            break;
          case "greater-equal":
            totalCompareRes = row.total >= total.value
            break;
          case "less-equal":
            totalCompareRes = row.total <= total.value
            break;
          default:

            break;
        }
      }
      if ((isName || isName === '') &&
        (isAddress || isAddress === '') &&
        (isOrder || isOrder === '') &&
        (isName || isName === '') &&
        (taxCompareRes || taxCompareRes === '') &&
        (totalCompareRes || totalCompareRes === '')) {

        newDataArray.push(row)


      }

    })
    //setFilterdArray(newDataArray)
    setFilterdA(newDataArray)

  }

  return (
    <div className="join-container">
      <header class="join-header">
        <h4>Select Filter</h4>
      </header>
      <div className="join-main">
        <form action="" onSubmit={onSelectFilterHandler}>
          <div class="form-control">
            <div class="filter-txt">
              <label for='customer'>Customer :</label>
              <input name='customer' type="text" placeholder="Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
            </div>
            <div class="filter-txt">
              <label for='address'>Address :</label>
              <input name='address' type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div class="filter-txt">
              <label for='order'>Order :</label>
              <input type="text" placeholder="Order" value={order} onChange={(e) => setOrder(e.target.value)} />
            </div>
            <div className="filter-num">
              <label for='tax'>Tax:</label>
              <select name="tax" id="operations" onChange={(e) => setTax({ ...tax, operation: e.target.value })}>
                <option value="Default">No selection</option>
                <option value="greater">Greater</option>
                <option value="less">Less</option>
                <option value="greater-equal">Greate-Equal</option>
                <option value="less-equal">Less-Equal</option>
              </select>
              <input class='input-value' type="text" placeholder="Tax" value={tax.value} onChange={(e) => setTax({ ...tax, value: e.target.value })} />
            </div>
            <div className="filter-num">
              <label for='total'>Total:</label>
              <select name="total" id="operations" onChange={(e) => setTotal({ ...total, operation: e.target.value })
              }>
                <option value="Default">No selection</option>
                <option value="greater">Greater</option>
                <option value="less">Less</option>
                <option value="greater-equal">Greate-Equal</option>
                <option value="less-equal">Less-Equal</option>
              </select>
              <input class='input-value' type="text" placeholder="Toal" value={total.value} onChange={(e) => setTotal({ ...total, value: e.target.value })} />
            </div>
            <input type="submit" value="submit" class="btn" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Filter
