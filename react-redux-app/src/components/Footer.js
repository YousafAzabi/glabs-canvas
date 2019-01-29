import React from 'react'
import PageSelector from '../containers/PageSelector'
import { PageNumbers } from '../actions'

const Footer = () => (
  <div>
    <span>Select Page: </span>
    <PageSelector id={PageNumbers.ONE} number={PageNumbers.ONE}>ONE</PageSelector>
    <PageSelector id={PageNumbers.TWO} number={PageNumbers.TWO}>TWO</PageSelector>
    <PageSelector id={PageNumbers.THREE} number={PageNumbers.THREE}>THREE</PageSelector>
    <PageSelector id={PageNumbers.FOUR} number={PageNumbers.FOUR}>FOUR</PageSelector>
    <PageSelector id={PageNumbers.FIVE} number={PageNumbers.FIVE}>FIVE</PageSelector>
    <PageSelector id={PageNumbers.SIX} number={PageNumbers.SIX}>SIX</PageSelector>
  </div>
)

export default Footer
