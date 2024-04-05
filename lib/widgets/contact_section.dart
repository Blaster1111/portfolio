import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/constants/colors.dart';
import 'package:portfolio/constants/size.dart';
import 'package:portfolio/constants/sns_links.dart';
import 'package:portfolio/widgets/custom_text_field.dart';
import 'dart:js' as js;

class ContactSection extends StatelessWidget {
  const ContactSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16.0),
      width: double.maxFinite,
      color: CustomColor.bgLight1,
      child: Column(
        children: [
          //title
          Text(
            "Get in touch",
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 24.0,
              color: CustomColor.whitePrimary,
            ),
          ),

          const SizedBox(
            height: 50.0,
          ),
          ConstrainedBox(
            constraints: BoxConstraints(
              maxWidth: 700,
              maxHeight: 100,
            ),
            child: LayoutBuilder(
              builder: (context, constraints) {
                if (constraints.maxWidth > -kMinDesktopWidth) {
                  return buildNameEmailFieldDesktop();
                }
                //else
                return builNameEmailFieldMobile();
              },
            ),
          ),
          const SizedBox(
            height: 15.0,
          ),

          ConstrainedBox(
            constraints: BoxConstraints(
              maxWidth: 700,
            ),
            child: CustomTextField(
              hintText: "Your Message",
              maxLines: 16,
            ),
          ),
          const SizedBox(
            height: 20,
          ),

          //send button
          ConstrainedBox(
            constraints: BoxConstraints(
              maxWidth: 700,
            ),
            child: SizedBox(
              width: double.maxFinite,
              child: ElevatedButton(
                style: ButtonStyle(
                  backgroundColor:
                      MaterialStateProperty.all(CustomColor.yellowPrimary),
                ),
                onPressed: () {},
                child: Text(
                  "Get in touch",
                  style: TextStyle(
                    color: CustomColor.whitePrimary,
                  ),
                ),
              ),
            ),
          ),
          const SizedBox(
            height: 30,
          ),
          ConstrainedBox(
            constraints: BoxConstraints(
              maxWidth: 300,
            ),
            child: const Divider(),
          ),
          const SizedBox(
            height: 15.0,
          ),
          //SNS ICON BUTTONS
          Wrap(
            spacing: 12.0,
            runSpacing: 12.0,
            alignment: WrapAlignment.center,
            children: [
              InkWell(
                onTap: () {
                  js.context.callMethod('open', [SnsLinks.github]);
                },
                child: Image.asset(
                  "github.png",
                  width: 28.0,
                ),
              ),
              InkWell(
                onTap: () {
                  js.context.callMethod('open', [SnsLinks.linkedin]);
                },
                child: Image.asset(
                  "linkedin.png",
                  width: 28.0,
                ),
              ),
              InkWell(
                onTap: () {
                  js.context.callMethod('open', [SnsLinks.instagram]);
                },
                child: Image.asset(
                  "instagram.png",
                  width: 28.0,
                ),
              ),
              InkWell(
                onTap: () {
                  js.context.callMethod('open', [SnsLinks.leetcode]);
                },
                child: Image.asset(
                  "leetcode.png",
                  width: 28.0,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Row buildNameEmailFieldDesktop() {
    return Row(
      children: [
        Flexible(
          child: CustomTextField(
            hintText: "Your Name",
          ),
        ),
        const SizedBox(
          width: 15.0,
        ),
        Flexible(
          child: CustomTextField(
            hintText: "Your Email",
          ),
        ),
      ],
    );
  }

  Column builNameEmailFieldMobile() {
    return Column(
      children: [
        Flexible(
          child: CustomTextField(
            hintText: "Your Name",
          ),
        ),
        const SizedBox(
          height: 15.0,
        ),
        Flexible(
          child: CustomTextField(
            hintText: "Your Email",
          ),
        ),
      ],
    );
  }
}
