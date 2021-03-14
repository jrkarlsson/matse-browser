const FolderIcon = () =>
  <svg
    aria-hidden='true'
    focusable='false'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
  >
    <defs>
      <linearGradient id='linear' x1='0%' y1='100%' x2='100%' y2='0%'>
        <stop offset='0%' stopColor='#c83e70' />
        <stop offset='64%' stopColor='#fe8137' />
        <stop offset='100%' stopColor='#fcea9c' />
      </linearGradient>

    </defs>
    <path
      fill='url(#linear)'
      d='M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z'
    />
  </svg>

export default FolderIcon
