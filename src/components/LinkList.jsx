import './LinkList.css'

function LinkList() {
  const links = [
    {
      id: 'btn_twitter',
      title: 'Twitter Link',
      url: 'https://twitter.com/Softowerribwoy',
    },
    {
      id: 'btn_zuri',
      title: 'Zuri Team',
      url: 'https://training.zuri.team/',
    },
    {
      id: 'books',
      title: 'Zuri Books',
      url: 'https://books.zuri.team/',
    },
    {
      id: 'book_python',
      title: 'Python Books',
      url: 'https://books.zuri.team/',
    },
    {
      id: 'pitch',
      title: 'Background Check for Coders',
      url: 'https://books.zuri.team/',
    },
    {
      id: 'book_design',
      title: 'Design Books',
      url: 'https://books.zuri.team/',
    },
  ]
  return (
    <div className='links'>
      {links.map((link) => {
        return (
          <a
            className='btn btn-link'
            href={link.url}
            key={link.id}
            id={link.id}>
            {link.title}
          </a>
        )
      })}
    </div>
  )
}

export default LinkList
