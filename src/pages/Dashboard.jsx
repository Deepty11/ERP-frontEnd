import React, { useEffect } from 'react'
import { FaChartLine, FaUsers } from 'react-icons/fa';
import { FaCartShopping, FaArrowTrendUp } from 'react-icons/fa6';
import { MdOutlineRefresh } from 'react-icons/md'
import CardContent from '../components/CardContent';
import CustomLineChart from '../components/CustomLineChart';
import CardHeaderComponent from '../components/card/CardHeaderComponent';

const Dashboard = ({ onPageLoad }) => {
    const cardItems = [
        { icon: <FaUsers size={50} />, label: 'Clients', value: '512', iconColor: 'text-green-500' },
        { icon: <FaCartShopping size={50} />, label: 'Sales', value: '$770', iconColor: 'text-red-500' },
        { icon: <FaArrowTrendUp size={50} />, label: 'Performance', value: '256%', iconColor: 'text-red-500' }
    ];

    useEffect(() => {
        onPageLoad('Dashboard')
    }, [])

    return (
        <section className="section main-section">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
                {cardItems.map((item, index) => (
                    <div key={index}>
                        <CardContent
                            label={item.label}
                            value={item.value}
                            icon={item.icon}
                            iconColor={item.iconColor} />
                    </div>
                ))}
            </div>

            <div className="card mb-6">
                <CardHeaderComponent
                    title='Performance'
                    leftIcon={<FaChartLine />}
                    rightIcon={<MdOutlineRefresh />} />
                <div className="card-content">
                    <div className="chart-area">
                        <div className="h-full">
                            <CustomLineChart />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard