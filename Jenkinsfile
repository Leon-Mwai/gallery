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

        stage('Deploy/Update Site') {
            steps {
                echo 'Deploying/Updating site...'
                
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
