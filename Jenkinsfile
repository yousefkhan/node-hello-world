pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
               sh 'npm install'
            }
        }
        stage('Test') {
            steps {
               sh 'npm test'
            }
        }
        stage('Deploy') {
                    steps {
                        sh 'pm2 stop app'
                        sh 'pm2 start app.js'
                    }
              }

    }
}