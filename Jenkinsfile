pipeline {
    agent any

    environment {
        
        RECIPIENT = 'muriithileon2007@gmail.com'
    }

    stages {
        stage('Checkout Code') {
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

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Build/Deploy') {
            steps {
                echo 'Optional: Build or deploy steps can go here'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }

        failure {
            echo 'Pipeline failed!'
            mail to: "${RECIPIENT}",
                 subject: "Build failed in Jenkins: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                 body: "Check Jenkins console output for details: ${env.BUILD_URL}"
        }
    }
}
