/*
 * Copyright 1999-2018 Alibaba Group Holding Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *      http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
    "data": [
        {
            "isExtend": true,
            "name": "配置管理",
            "title": "配置管理",
            "isVirtual": true,
            "projectName": "nacos",
            "serviceName": "configurationManagementVirtual",
            "link": "configurationManagementVirtual",
            "hasFusion": true,
            "template": "",
            "registerName": "com.alibaba.nacos.page.configurationManagementVirtual",
            "useRouter": false,
            "id": "com.alibaba.nacos.page.configurationManagementVirtual",
            "children": [
                {
                    "isExtend": false,
                    "name": "配置列表",
                    "title": "配置列表",
                    "isVirtual": false,
                    "projectName": "nacos",
                    "serviceName": "configurationManagement",
                    "link": "configurationManagement",
                    "hasFusion": true,
                    "template": "",
                    "dontUseChild": false,
                    "registerName": "com.alibaba.nacos.page.configurationManagement",
                    "useRouter": false,
                    "id": "configurationManagement",
                    "children": [
                        {
                            "isExtend": false,
                            "name": "配置详情",
                            "title": "配置详情",
                            "isVirtual": false,
                            "projectName": "nacos",
                            "serviceName": "configdetail",
                            "link": "Configdetail",
                            "hasFusion": true,
                            "template": "",
                            "dontUseChild": false,
                            "registerName": "com.alibaba.nacos.page.configdetail",
                            "useRouter": false,
                            "id": "configdetail"
                        },
                        {
                            "isExtend": false,
                            "name": "同步配置",
                            "title": "同步配置",
                            "isVirtual": false,
                            "projectName": "nacos",
                            "serviceName": "configsync",
                            "link": "configsync",
                            "hasFusion": true,
                            "template": "",
                            "dontUseChild": true,
                            "registerName": "com.alibaba.nacos.page.configsync",
                            "useRouter": false,
                            "id": "configsync"
                        },
                        {
                            "isExtend": false,
                            "name": "配置编辑",
                            "title": "配置编辑",
                            "isVirtual": false,
                            "projectName": "nacos",
                            "serviceName": "configeditor",
                            "link": "configeditor",
                            "hasFusion": true,
                            "template": "",
                            "registerName": "com.alibaba.nacos.page.configeditor",
                            "useRouter": false,
                            "id": "configeditor"
                        },
                        {
                            "isExtend": false,
                            "name": "新建配置",
                            "title": "新建配置",
                            "isVirtual": false,
                            "projectName": "nacos",
                            "serviceName": "newconfig",
                            "link": "newconfig",
                            "hasFusion": true,
                            "template": "",
                            "registerName": "com.alibaba.nacos.page.newconfig",
                            "useRouter": false,
                            "id": "newconfig"
                        }
                    ]
                },
                {
                    "isExtend": false,
                    "name": "历史版本",
                    "title": "历史版本",
                    "isVirtual": false,
                    "projectName": "nacos",
                    "children": [
                        {
                            "isExtend": false,
                            "name": "配置回滚",
                            "title": "配置回滚",
                            "isVirtual": false,
                            "projectName": "nacos",
                            "serviceName": "configRollback",
                            "link": "configRollback",
                            "hasFusion": true,
                            "template": "",
                            "registerName": "com.alibaba.nacos.page.configRollback",
                            "useRouter": false,
                            "id": "configRollback"
                        },
                        {
                            "isExtend": false,
                            "name": "历史详情",
                            "title": "历史详情",
                            "isVirtual": false,
                            "projectName": "nacos",
                            "serviceName": "historyDetail",
                            "link": "historyDetail",
                            "hasFusion": true,
                            "template": "",
                            "registerName": "com.alibaba.nacos.page.historyDetail",
                            "useRouter": false,
                            "id": "historyDetail"
                        }
                    ],
                    "serviceName": "historyRollback",
                    "link": "historyRollback",
                    "hasFusion": true,
                    "template": "",
                    "dontUseChild": false,
                    "registerName": "com.alibaba.nacos.page.historyRollback",
                    "useRouter": false,
                    "id": "historyRollback"
                },
                {
                    "isExtend": false,
                    "name": "监听查询",
                    "title": "监听查询",
                    "isVirtual": false,
                    "projectName": "nacos",
                    "serviceName": "listeningToQuery",
                    "link": "listeningToQuery",
                    "hasFusion": true,
                    "template": "",
                    "registerName": "com.alibaba.nacos.page.listeningToQuery",
                    "useRouter": false,
                    "id": "listeningToQuery"
                }
            ]
        },
        {
            "isExtend": true,
            "name": "服务管理",
            "title": "服务管理",
            "isVirtual": true,
            "projectName": "nacos",
            "serviceName": "serviceManagementVirtual",
            "link": "serviceManagementVirtual",
            "hasFusion": true,
            "template": "",
            "registerName": "com.alibaba.nacos.page.serviceManagementVirtual",
            "useRouter": false,
            "id": "com.alibaba.nacos.page.serviceManagementVirtual",
            "children": [
                {
                    "isExtend": false,
                    "name": "服务列表",
                    "title": "服务列表",
                    "isVirtual": false,
                    "projectName": "nacos",
                    "serviceName": "serviceManagement",
                    "link": "serviceManagement",
                    "hasFusion": true,
                    "template": "",
                    "registerName": "com.alibaba.nacos.page.serviceManagement",
                    "useRouter": false,
                    "id": "serviceManagement",
                    "children":[
                        {
                            "isExtend": true,
                            "name": "服务详情",
                            "title": "服务详情",
                            "isVirtual": true,
                            "projectName": "nacos",
                            "serviceName": "serviceDetail",
                            "link": "serviceDetail",
                            "hasFusion": true,
                            "template": "",
                            "registerName": "com.alibaba.nacos.page.ServiceDetail",
                            "useRouter": false,
                            "id": "serviceDetail",
                        }
                    ]
                }
            ]
        },
        {
            "isExtend": false,
            "name": "命名空间",
            "title": "命名空间",
            "isVirtual": false,
            "projectName": "nacos",
            "serviceName": "namespace",
            "link": "namespace",
            "hasFusion": true,
            "template": "",
            "dontUseChild": false,
            "registerName": "com.alibaba.nacos.page.namespace",
            "useRouter": false,
            "id": "namespace"
        }
    ],
    "defaultKey": "configurationManagement",
    "projectName": "nacos"
}
