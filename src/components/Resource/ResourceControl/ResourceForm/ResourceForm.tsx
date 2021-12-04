import { useState } from 'react';
import { Form, Input, Button, InputNumber, Select, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const ResourceForm = () => {
  const [loading, setLoading] = useState(false);
  const resourceForm = useSelector(
    (store: { baseReducer: { resourceForm: any } }) =>
      store.baseReducer.resourceForm,
  );
  const imageUrl = '';
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传图片</div>
    </div>
  );
  return (
    <>
      <Form name="addResource" className={`flexRow`} labelCol={{ span: 8 }}>
        <div className={`flex flex-col`}>
          <Form.Item>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              // beforeUpload={beforeUpload}
              // onChange={this.handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
        </div>
        <div className={`flex flex-col w-72`}>
          <Form.Item
            label="资源名称"
            name="name"
            rules={[{ required: true, message: '必须输入资源名' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="资源数量">
            <Input.Group compact={true}>
              <Form.Item
                name={['totalNum', 'company']}
                noStyle={true}
                rules={[{ required: true, message: '必须输入资源数量' }]}>
                <InputNumber />
                <Select defaultValue={resourceForm.company[0]}>
                  {resourceForm.company.map((item: string) => (
                    <Select.Option key={item} value={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label="资源描述" name="resourceDetail">
            <Input />
          </Form.Item>
        </div>
        <div className={`flex flex-col w-72`}>
          <Form.Item label="资源类型" name="type">
            <Select defaultValue={resourceForm.type[0]}>
              {resourceForm.type.map((item: string) => (
                <Select.Option key={item} value={item}>
                  {item}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="资源归属" name="to">
            <Select />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => setLoading(true)}
              loading={loading}>
              提交
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};
export default ResourceForm;
