require 'json'

package = JSON.parse(File.read(File.join(__dir__, '..', 'package.json')))

Pod::Spec.new do |s|
  s.name           = 'Bill24Sdk'
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = package['description']
  s.license        = package['license']
  s.author         = package['author']
  s.homepage       = package['homepage']
  s.platforms      = {:ios => '15.1'}
  s.swift_version  = '5.9'
  s.source         = { git: 'https://github.com' }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'
  # https://business-docs.bill24.io/ios-sdk-929823m0
  s.dependency 'B24PaymentSdk', '~> 1.1.46'
  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
  }

  s.source_files = "**/*.{swift}"
end
