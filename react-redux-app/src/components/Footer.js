import React from 'react'
import PageSelector from '../containers/PageSelector'
import { PageNumbers } from '../actions'

const Footer = () => (
  <div>
    <span>Select Page: </span>
    <PageSelector id={PageNumbers.ONE} page={PageNumbers.ONE}>ONE</PageSelector>
    <PageSelector id={PageNumbers.TWO} page={PageNumbers.TWO}>TWO</PageSelector>
    <PageSelector id={PageNumbers.THREE} page={PageNumbers.THREE}>THREE</PageSelector>
    <PageSelector id={PageNumbers.FOUR} page={PageNumbers.FOUR}>FOUR</PageSelector>
    <PageSelector id={PageNumbers.FIVE} page={PageNumbers.FIVE}>FIVE</PageSelector>
    <PageSelector id={PageNumbers.SIX} page={PageNumbers.SIX}>SIX</PageSelector>
  </div>
)

export default Footer
