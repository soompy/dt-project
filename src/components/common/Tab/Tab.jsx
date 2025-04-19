const Tab = ({tabList, activeTab, onTabClick}) => {
    return (
        <div>
            {
                tabList.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => onTabClick(index)}
                        style={{
                            fontWeight: activeTab === index ? 'bold' : 'normal',
                            borderBottom: activeTab === index ? '2px solid black' : 'none',
                        }}
                    >
                        {tab}
                    </button>
                ))
                
            }
        </div>
    )
}

export default Tab;