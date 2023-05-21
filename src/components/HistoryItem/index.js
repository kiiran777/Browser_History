import './index.css'

const HistoryItem = props => {
  const {historyListDetails, onDeleteHistoryItem} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = historyListDetails

  const onDeleteHistory = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className="history-list-item">
      <div className="time-container">
        <p className="browsing-time">{timeAccessed}</p>
        <div className="history-content-container">
          <div className="content-card">
            <img
              src={logoUrl}
              alt="domain logo"
              className=" history-domain-logo"
            />
            <p className="history-title">{title}</p>
            <p className="history-domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="history-delete-container">
        <button
          className="delete-btn"
          type="button"
          onClick={onDeleteHistory}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="browser-del-btn"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
