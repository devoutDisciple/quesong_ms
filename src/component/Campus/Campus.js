import React from 'react';
import {inject, observer} from 'mobx-react';
import './index.less';
import {
	Form, Input, Col, Button, Table
} from 'antd';
const FormItem = Form.Item;

@inject('GlobalStore')
@observer
class Campus extends React.Component{

	constructor(props) {
		super(props);
		this.globalStore = props.GlobalStore;
	}

	state = {
		dataSource: []
	}

	componentDidMount() {

	}

	onSearch() {

	}

	render() {
		const formItemLayout = {
			labelCol: { span: 4 },
			wrapperCol: { span: 20 },
		};
		let campusList = this.globalStore.campus;
		const { getFieldDecorator } = this.props.form;
		const columns = [
			{
				title: '学校',
				dataIndex: 'name',
				key: 'name',
				align: 'center'
			},
			{
				title: '权重',
				dataIndex: 'sort',
				key: 'sort',
				align: 'center'
			},
			{
				title: '操作',
				dataIndex: 'operation',
				key: 'operation',
				align: 'center',
				render:(text, record) => {
					/*eslint-disable*/
					return <span className="common_table_span">
						<a href={record.url} target="_blank">删除</a>
						<a href={record.url} target="_blank">修改</a>
					</span>;
				}
			}
		];
		return (
			<div className='common'>
				<div className='common_search'>
					<Form className="common_search_form" {...formItemLayout}>
						<Col span={6}>
							<FormItem
								label="校园名称">
								{getFieldDecorator('campus')(
									<Input placeholder="请输入校园名称" />
								)}
							</FormItem>
						</Col>
						<Col span={6} offset={1}>
							<Button type='primary' onClick={this.onSearch.bind(this)}>查询</Button>
							<Button type='primary' onClick={this.onSearch.bind(this)}>新增</Button>
						</Col>
					</Form>
				</div>
				<div className='common_content'>
					<Table
						bordered
						dataSource={campusList}
						columns={columns}
						pagination={
							{
								total: campusList.length,
								showTotal: (total) => `共 ${total} 条`
							}
						}/>
				</div>
			</div>
		);
	}
}

const CampusForm = Form.create()(Campus);
export default CampusForm;
