# Generated by Django 4.2.7 on 2023-12-11 05:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company_app', '0003_latestnews_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='latestnews',
            name='link',
            field=models.TextField(default='https://www.facebook.com/SIDAL.SET/', verbose_name='Related link about this event'),
        ),
    ]
