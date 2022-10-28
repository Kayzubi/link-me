import './LinkList.css'

function LinkList() {
  const links = [
    {
      id: 'btn__twitter',
      title: 'Twitter Link',
      url: 'https://twitter.com/Softowerribwoy',
    },
    {
      id: 'btn__zuri',
      title: 'Zuri Team',
      url: 'https://training.zuri.team/',
    },
    {
      id: 'books',
      title: 'Zuri Books',
      url: 'https://books.zuri.team/',
    },
    {
      id: 'book__python',
      title: 'Python Books',
      url: 'https://books.zuri.team/python-for-beginners?ref_id=Kayzubi',
    },
    {
      id: 'pitch',
      title: 'Background Check for Coders',
      url: 'https://background.zuri.team',
    },
    {
      id: 'book__design',
      title: 'Design Books',
      url: 'https://books.zuri.team/design-rules',
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
