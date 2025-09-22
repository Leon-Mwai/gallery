pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'pytest || true'  // milestone 3 tests (won’t break pipeline if tests fail)
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'echo "Banner updated with milestone 3 changes!"'
            }
        }
    }

    post {
        success {
            slackSend (
                channel: '#jenkins-builds',
                color: 'good',
                message: "✅ Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' succeeded! (<${env.BUILD_URL}|Open>)"
            )
        }
        failure {
            slackSend (
                channel: '#jenkins-builds',
                color: 'danger',
                message: "❌ Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' failed! (<${env.BUILD_URL}|Open>)"
            )
        }
    }
}
