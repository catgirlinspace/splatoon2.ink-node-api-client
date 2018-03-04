pipeline {
  agent {
    dockerfile {
      filename 'FROM node:8.9.4'
    }
    
  }
  stages {
    stage('Test') {
      agent {
        node {
          label 'Node'
        }
        
      }
      steps {
        sh 'npm run test'
      }
    }
  }
}