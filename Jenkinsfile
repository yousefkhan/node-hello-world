pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                npm install
            }
        }
        stage('Test') {
            steps {
                npm test
            }
        }
        stage('Deploy') {
            steps {
                pm2 restart all
            }
        }
    }
}