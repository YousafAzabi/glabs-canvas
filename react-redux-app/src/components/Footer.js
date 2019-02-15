import React from 'react'
import PageSelector from '../containers/PageSelector'
import { PageNumbers } from '../actions'

const Footer = () => (
  <div className="page-button-container">
    <PageSelector id={PageNumbers.ONE} page={PageNumbers.ONE}>Product and Serivce</PageSelector>
    <PageSelector id={PageNumbers.TWO} page={PageNumbers.TWO}>Customer Segment</PageSelector>
    <PageSelector id={PageNumbers.THREE} page={PageNumbers.THREE}>Job to be Done</PageSelector>
    <PageSelector id={PageNumbers.FOUR} page={PageNumbers.FOUR}>Gain</PageSelector>
    <PageSelector id={PageNumbers.FIVE} page={PageNumbers.FIVE}>Pain</PageSelector>
    <PageSelector id={PageNumbers.SIX} page={PageNumbers.SIX}>Competing Value Proposition</PageSelector>
  </div>
)

export default Footer
