import { Button, Form, Table, Input } from 'antd';
import React from 'react'
import { useEffect, useState } from 'react';

export default function ExpenseTracker1() {



    const[transactions,setTransactions]= useState([])
    const[form]= From.useForm();


    const[type, setType] = useState(undefined)
    const [totals, setTotals] = useState({
        income: 0,
        expense: 0,
        profitLoss: 0
    })
    useEffect(() => {
        if (transactions.length) {
            let income = 0
            let expense = 0
            transactions.forEach((data) => {
                if (data.type === 'income') {
                    income = income + parseInt(data.amount)
                } else {
                    expense = expense + parseInt(data.amount)
                }
            })
            setTotals({ income, expense, profitLoss: income - expense })
        }
    }, [transactions])
    const onFinish = (values) => {
        console.log(values);
        const obj = {
            ...values,
            type,
            created_at: new Date().toLocaleDateString()
        }
        setTransactions([obj, ...transactions])
    }

}




const columns = [
    {
        title: 'Date',
        dataIndex: 'created_date',
        key: 'created_date',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Description',
        dataIndex: 'desc',
        key: 'desc',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    },
];


 return (
    <main>
        <div className="min-h-screen p-5 bg-white flex flex-col items-center">
            <h2 className="font-700 text-[30px]">Expense Tracker</h2>
            <div className="flex">
                <div onClick={() => setType('income')}
                    style={{
                        borderColor: '#ccc', borderRadius: 25,
                        cursor: 'pointer', borderWidth: 1,
                        backgroundColor: type === 'income' ? 'green' : 'white',
                        color: type === 'income' ? '#fff' : '#000'
                    }} className={`px-4 py-2 m-2`}>
                    Income</div>
                <div onClick={() => setType('expense')}
                    style={{
                        borderRadius: 25, borderColor: '#ccc',
                        cursor: 'pointer', borderWidth: 1,
                    }} className={`px-4 py-2 m-2`}>Expense</div>
            </div>

            <div>

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Amount"
                        name="amount"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Amount!',
                            },
                        ]}
                    >
                        <Input type='number' />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Description!',
                            },
                        ]}
                    >
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>



                <div className='w-[700px] border-black flex'>

                    <div className='p-3' style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                        <h1 >Income</h1>
                        <h1 className='font-bold text-[40px] text-green-400'>{totals.income}</h1>
                    </div>
                    <div className='p-3' style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: 'center' }}>
                        <h1>Expense</h1>
                        <h1 className='font-bold text-[40px] text-green-400'>{totals.expnse}</h1>
                    </div>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', }}>
                        <h1>Profit / Loss</h1>
                        <h1 className='font-bold text-[40px] text-red-400' style={{ color: totals.profitLoss >= 0 ? 'green' : 'red' }}>{totals.profitLoss}</h1>
                    </div>

                </div>
                <Table dataSource={transactions} columns={columns} />;

            </div>
        </div>
    </main >
)









// import { Button, Table, Form, Input } from 'antd';
// import { useEffect, useState } from 'react';




// export default function ExpenseTracker() {

//     const [transactions, setTransactions] = useState([])
//     const [type, setType] = useState(undefined)
//     const [totals, setTotals] = useState({
//         income: 0,
//         expense: 0,
//         profitLoss: 0
//     })

//     const onFinish = (values) => {
//         console.log(values)

//         const obj = {
//             ...values,
//             type,
//             created_at: new Date().toLocaleString()
//         }
//         console.log(obj)
//         setTransactions([obj, ...transactions])

//     };

//     useEffect(() => {
//         if (transactions.length) {
//             let income = 0
//             let expense = 0
//             transactions.forEach((data) => {
//                 if (data.type === 'income') {
//                     income = income + parseInt(data.amount)
//                 } else {
//                     expense = expense + parseInt(data.amount)
//                 }
//             })

//             setTotals({ income, expense, profitLoss: income - expense })

//         }
//     }, [transactions])


//     const columns = [
//         {
//             title: 'Date',
//             dataIndex: 'created_at',
//             key: 'created_at',
//         },
//         {
//             title: 'Amount',
//             dataIndex: 'amount',
//             key: 'amount',
//         },
//         {
//             title: 'Description',
//             dataIndex: 'desc',
//             key: 'desc',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//     ];

//     return (
//  -------1------
//         <div className="min-h-screen p-5 bg-white flex flex-col items-center">
    //    <h2 className="font-700 text-[30px]">Expense Tracker</h2>
    
    
    // -------2------
//             <div className='flex'>
//                 <div
//                     onClick={() => setType('income')}
//                     style={{
//                         borderColor: '#ccc', borderRadius: 25,
//                         cursor: 'pointer', borderWidth: 1,
//                         backgroundColor: type === 'income' ? 'green' : 'white',
//                         color: type === 'income' ? '#fff' : '#000'
//                     }} className={`px-4 py-2 m-2`}>
//                     Income
//                 </div>

//                 <div style={{
//                     borderColor: '#ccc', borderRadius: 25,
//                     cursor: 'pointer', borderWidth: 1,
//                     backgroundColor: type === 'expense' ? 'red' : 'white',
//                     color: type === 'expense' ? '#fff' : '#000'
//                 }}
//                     onClick={() => setType('expense')}
//                     className={`px-4 py-2 m-2 `}>
//                     Expense
//                 </div>
//             </div>

//  -------3------
//             <Form
//                 name="basic"
//                 style={{
//                     maxWidth: 600,
//                 }}
//                 onFinish={onFinish}
//             >
//                 <Form.Item
//                     label={'Amount'}
//                     name={'amount'}
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your amount!',
//                         },
//                     ]}

//                 >
//                     <Input type='number' />
//                 </Form.Item>

//                 <Form.Item
//                     label={'Description'}
//                     name={'desc'}
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your description!',
//                         },
//                     ]}

//                 >
//                     <Input type='text' />
//                 </Form.Item>

//                 <Form.Item
//                     wrapperCol={{
//                         offset: 8,
//                         span: 16,
//                     }}
//                 >
//                     <Button htmlType="submit">
//                         Submit
//                     </Button>
//                 </Form.Item>
//             </Form>

//             <div className='w-[700px] border-black flex'>


//  -------4------
//                 <div className='p-3' style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
//                     <h1 >Income</h1>
//                     <h1 className='font-bold text-[40px] text-green-400'>{totals.income}</h1>
//                 </div>
//                 <div className='p-3' style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
//                     <h1>Expense</h1>
//                     <h1 className='font-bold text-[40px] text-red-400'>{totals.expense}</h1>
//                 </div>
//                 <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', }}>
//                     <h1>Profit / Loss</h1>
//                     <h1 className='font-bold text-[40px] text-red-400' style={{ color: totals.profitLoss >= 0 ? 'green' : 'red' }}>{totals.profitLoss}</h1>
//                 </div>

//             </div>


//  -------5------
//             <Table style={{ width: "700px" }} dataSource={transactions} columns={columns} />

//         </div>
//     )
// }