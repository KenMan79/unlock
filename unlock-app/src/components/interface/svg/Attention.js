import React from 'react'
import PropTypes from 'prop-types'

const SvgAttention = ({ title, ...props }) => (
  <svg viewBox="0 0 96 96" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M95.316 84.437L53.012 5.663c-1.008-1.878-2.88-2.996-5.011-2.996-2.131 0-4.003 1.12-5.011 2.997L.684 84.437a5.64 5.64 0 00.13 5.61 5.642 5.642 0 004.882 2.769h84.608a5.645 5.645 0 004.883-2.769 5.64 5.64 0 00.129-5.61zM46.513 7.557L4.208 86.33c-.29.54-.276 1.14.038 1.663.315.527.836.823 1.45.823h84.608c.613 0 1.136-.296 1.45-.823a1.641 1.641 0 00.038-1.663L49.489 7.556c-.312-.58-.83-.89-1.488-.89-.656 0-1.175.31-1.487.891zm-.576 40.29l-2.424-9.582a4.654 4.654 0 01.699-4.187A4.656 4.656 0 0148 32.161c1.511 0 2.892.7 3.788 1.917a4.653 4.653 0 01.7 4.187l-2.425 9.582L48 56l-2.063-8.153zm10.405-8.509a8.652 8.652 0 00-1.332-7.63A8.66 8.66 0 0048 28.16a8.655 8.655 0 00-7.011 3.548 8.652 8.652 0 00-1.331 7.63l4.464 17.642a4 4 0 007.756 0l4.464-17.643zM48 64.636a7.518 7.518 0 00-7.514 7.514A7.518 7.518 0 0048 79.664a7.518 7.518 0 007.514-7.514A7.518 7.518 0 0048 64.636zm0 4a3.518 3.518 0 00-3.514 3.514A3.518 3.518 0 0048 75.664a3.518 3.518 0 003.514-3.514A3.518 3.518 0 0048 68.636z"
    />
  </svg>
)

SvgAttention.propTypes = {
  title: PropTypes.string,
}
SvgAttention.defaultProps = {
  title: '',
}
export default SvgAttention
