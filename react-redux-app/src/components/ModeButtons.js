
import React from 'react'
import ModeSelector from '../containers/ModeSelector'
import { ModeStatus } from '../actions'

const ModeButtons = () => (
  <div>
    <span>Select View Mode: </span>
    <ModeSelector mode={ModeStatus.EDIT}>Edit</ModeSelector>
    <ModeSelector mode={ModeStatus.VIEW}>View</ModeSelector>
    <ModeSelector mode={ModeStatus.STATEMENT}>Statement</ModeSelector>
  </div>
)

export default ModeButtons
