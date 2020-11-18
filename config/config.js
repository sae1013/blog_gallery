var config = {
    server_port: 5000,
    db_url: 'mongodb://localhost:27017/local',
    db_schemas: [
        {
            file: './user_schema', collection: 'users8', schemaName: 'UserSchema',
            modelName: 'UserModel'    // schemaName: 사용할 스키마이름, modelName- 사용할 모델 이름
        },
        {
            file: './post_schema', collection: 'post1', schemaName: 'PostSchema',
            modelName: 'PostModel'
        }
    ],
    route_info: [
        { file: './user', path: '/', method: 'home', type: 'get' },
        { file: './user', path: '/login', method: 'login', type: 'get' },
        { file: './user', path: '/signup', method: 'signup', type: 'get' },
        { file: './user', path: '/logout', method: 'logout', type: 'get' },
        { file: './post', path: '/write', method: 'write', type: 'get' },

    ]
};
module.exports = config;