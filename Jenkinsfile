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
                echo 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                pm2 restart all
            }
        }
    }
}