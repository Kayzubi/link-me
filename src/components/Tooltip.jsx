import './Tooltip.css'

function Tooltip({ tooltip, tooltipText, direction }) {
  return (
    <div className='tooltip-box'>
      <span flow={direction} tooltip={tooltipText}>
        {tooltip}
      </span>
    </div>
  )
}

export default Tooltip
