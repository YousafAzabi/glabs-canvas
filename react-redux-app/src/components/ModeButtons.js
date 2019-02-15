
import React from 'react'
import ModeSelector from '../containers/ModeSelector'
import { ModeStatus } from '../actions'

const ModeButtons = () => (
  <div id="mode-button-container">
    <div id="view-mode">Mode</div>
    <ModeSelector mode={ModeStatus.EDIT}>Edit</ModeSelector>
    <ModeSelector mode={ModeStatus.VIEW}>View</ModeSelector>
    <ModeSelector mode={ModeStatus.STATEMENT}>Statement</ModeSelector>
  </div>
)

export default ModeButtons
