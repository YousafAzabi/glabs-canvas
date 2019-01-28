import React from 'react'
import PageSelector from '../containers/PageSelector'
import { PageNumbers } from '../actions'

const Footer = () => (
  <div>
    <span>Select Page: </span>
    <PageSelector number={PageNumbers.ONE}>ONE</PageSelector>
    <PageSelector number={PageNumbers.TWO}>TWO</PageSelector>
    <PageSelector number={PageNumbers.THREE}>THREE</PageSelector>
    <PageSelector number={PageNumbers.FOUR}>FOUR</PageSelector>
    <PageSelector number={PageNumbers.FIVE}>FIVE</PageSelector>
    <PageSelector number={PageNumbers.SIX}>SIX</PageSelector>
  </div>
)

export default Footer
