pipeline {
  agent any
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