pipeline {
    agent any

    environment {
        PORT = '5000' 
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from Git...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing NPM dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Server') {
            steps {
                echo 'Starting the server in the background...'
                sh 'nohup node server.js &'
            }
        }

        stage('Test Server') {
            steps {
                echo 'Testing if server is running...'
                sh '''
                sleep 5
                curl -s http://localhost:$PORT | grep "Darkroom" || (echo "Server test failed!" && exit 1)
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully! '
        }
        failure {
            echo 'Pipeline failed. Fix errors and try again.'
        }
    }
}
